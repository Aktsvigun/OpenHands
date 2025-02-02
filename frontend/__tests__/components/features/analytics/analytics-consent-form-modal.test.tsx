import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnalyticsConsentFormModal } from "#/components/features/analytics/analytics-consent-form-modal";
import OpenHands from "#/api/open-hands";
import { SettingsProvider } from "#/context/settings-context";
import { AuthProvider } from "#/context/auth-context";

describe("AnalyticsConsentFormModal", () => {
  it("should call saveUserSettings with default settings on confirm reset settings", async () => {
    const user = userEvent.setup();
    const onCloseMock = vi.fn();
    const saveUserSettingsSpy = vi.spyOn(OpenHands, "saveSettings");

    render(<AnalyticsConsentFormModal onClose={onCloseMock} />, {
      wrapper: ({ children }) => (
        <AuthProvider>
          <QueryClientProvider client={new QueryClient()}>
            <SettingsProvider>{children}</SettingsProvider>
          </QueryClientProvider>
        </AuthProvider>
      ),
    });

    const confirmButton = screen.getByTestId("confirm-preferences");
    await user.click(confirmButton);

    expect(saveUserSettingsSpy).toHaveBeenCalledWith({
      user_consents_to_analytics: true,
      agent: "CodeActAgent",
      confirmation_mode: false,
      enable_default_condenser: false,
      github_token: undefined,
      language: "en",
      llm_api_key: undefined,
      llm_base_url: "https://api.studio.nebius.ai/v1",
      llm_model: "deepseek-ai/DeepSeek-V3",
      vlm_model: "Qwen/Qwen2-VL-72B-Instruct",
      structured_output_model: "deepseek-ai/DeepSeek-V3",
      remote_runtime_resource_factor: 1,
      security_analyzer: "",
      unset_github_token: undefined,
    });
    expect(onCloseMock).toHaveBeenCalled();
  });
});

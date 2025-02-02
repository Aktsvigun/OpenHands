enum ArgConfigType {
  LLM_MODEL = "LLM_MODEL",
  VLM_MODEL = "VLM_MODEL",
  STRUCTURED_OUTPUT_MODEL = "STRUCTURED_OUTPUT_MODEL",
  AGENT = "AGENT",
  LANGUAGE = "LANGUAGE",
  LLM_API_KEY = "LLM_API_KEY",
}

const SupportedSettings: string[] = [
  ArgConfigType.LLM_MODEL,
  ArgConfigType.VLM_MODEL,
  ArgConfigType.STRUCTURED_OUTPUT_MODEL,
  ArgConfigType.AGENT,
  ArgConfigType.LANGUAGE,
  ArgConfigType.LLM_API_KEY,
];

export { ArgConfigType, SupportedSettings };

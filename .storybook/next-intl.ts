import en from "../messages/en.json";
import se from "../messages/se.json";
import hu from "../messages/hu.json";

const messagesByLocale: Record<string, any> = { en, se, hu };

const nextIntl = {
  defaultLocale: "en",
  messagesByLocale,
};

export default nextIntl;

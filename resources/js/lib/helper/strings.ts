import { Color } from "@/modules/bootstrap/types";
import { random } from "./numbers";

export const autoId = (prefix: string = "id") => {
  return `${prefix}-${random(1000, 9999)}-${random(100000, 999999)}-${random(
    1000,
    9999
  )}-${random(1000000, 9999999)}-${random(1000, 9999)}-${random(
    10000000,
    99999999
  )}`;
};

export const capitalizeFirst = ([first, ...rest]: string, lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

/**
 * Slugify Text
 *
 * @param text
 * @param delimiter
 * @returns
 */
export const slugify = (text: string, delimiter: string = "-") => {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, delimiter)
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, delimiter)
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

/**
 * Upper Case First Letter
 *
 * @param string
 * @returns
 */
export function ucFirst(string: string): string {
  return string.replace(/^./, string[0].toUpperCase());
}

/**
 * Lower Case First Letter
 *
 * @param string
 * @returns
 */
export function lcFirst(string: string): string {
  return string.replace(/^./, string[0].toLowerCase());
}

/**
 * Upper Case Text Words
 *
 * @param text
 * @returns
 */
export function ucWords(text: string): string {
  return (text + "").replace(/^([a-z])|\s+([a-z])/g, function ($1) {
    return $1.toUpperCase();
  });
}

/**
 * Lower Case Text Words
 *
 * @param text
 * @returns
 */
export function lcWords(text: string): string {
  return (text + "").replace(/^([a-z])|\s+([a-z])/g, function ($1) {
    return $1.toLowerCase();
  });
}

export function createIds(prefix: string = "id") {
  const date = new Date();
  const time = date.getTime();
  return `${prefix}-${time}-${random(1987, time)}-${random(2009, time)}`;
}

export function nl2br(str: string, is_xhtml = false) {
  if (typeof str === "undefined" || str === null) {
    return "";
  }
  var breakTag =
    is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br>";
  return (str + "").replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    "$1" + breakTag + "$2"
  );
}

export function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export const na = () => {
  return `<span class="text-muted" style="user-select: none;">N/A</span>`;
};

export function copyText(text: string): Promise<void> {
  if (window.isSecureContext) {
    return navigator.clipboard.writeText(dedent(text));
  }
  return new Promise<void>((_, reject) => {
    reject();
  });
}

export function dedent(text: string) {
  const format = (str: string) => {
    const lines = str.split("\n");
    let out = "";
    lines.forEach((line) => {
      out += `${line.trim().replace(/ +(?= )/g, "")}\n`;
    });
    return out;
  };

  return format(text);
}

export function kebabCase(str: string) {
  return (
    str &&
    str
      ?.match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      ?.map((x) => x.toLowerCase())
      ?.join("-")
  );
}
export function camelCase(str: string, delimiter: string = "_") {
  return (
    str &&
    str
      .split(delimiter)
      .reduce(
        (res, word, i) =>
          i === 0
            ? word.toLowerCase()
            : `${res}${word.charAt(0).toUpperCase()}${word
                .substring(1)
                .toLowerCase()}`,
        ""
      )
  );
}

export function enumLabel(enumTxt: string) {
  return enumTxt
    .split("_")
    .map((txt) => ucFirst(txt))
    .join(" ");
}

export function icon(options?: {
  path: string;
  size?: string | number;
  viewBox?: string;
  attrs?: { [name: string]: string };
  color?: undefined | "muted" | Color;
}) {
  const { path, size, viewBox, attrs, color } = {
    size: 24,
    viewBox: "0 0 24 24",
    attrs: {},
    ...(options ?? {}),
  };
  const bind = Object.keys(attrs)
    .map((name: string) => `${name}="${attrs[name]}"`)
    .join(" ");
  if (Object.hasOwn(attrs, "style") && attrs.style.includes("--r")) {
    attrs.style +=
      "transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));";
  }
  return `
	<svg
		width="${size}"
		height="${size}"
		viewBox="${viewBox}"
		class="${`${color ? "text" : "default"}-${color ?? "color"}`}"
		${bind}
	>
		<path d="${path}" style="fill: currentColor" />
	</svg>
	`;
}

import toSlug from "@/lib/toSlug";

export default function formElementId(label: string, formType: string) {
  return toSlug(`${label}-${formType}`);
}

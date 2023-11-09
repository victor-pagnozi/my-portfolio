import { PrincipalName } from "./PrincipalName";
import { ItemKnowledge } from "./ItemsKnowledge";
import { ProjectPreviewItem } from "./ProjectPreviewItem";

export function MiddleSide() {
  return (
    <div className="pt-10 mb-10 h-full">
      <PrincipalName />
      <ItemKnowledge />

      <div
        className="grid grid-cols-[2fr_2fr_2fr] mt-28
          items-center justify-center text-center h-2/3 ml-40 gap-12"
      >
        <ProjectPreviewItem />
        <ProjectPreviewItem />
        <ProjectPreviewItem />
        <ProjectPreviewItem />
        <ProjectPreviewItem />
        <ProjectPreviewItem />
        <ProjectPreviewItem />
        <ProjectPreviewItem />
      </div>
    </div>
  );
}

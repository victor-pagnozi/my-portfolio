import { PrincipalName } from "./PrincipalName";
import { ItemKnowledge } from "./ItemsKnowledge";
import { ProjectPreviewItem } from "./ProjectPreviewItem";

export function MiddleSide() {
  return (
    <div className="pt-10 mb-10 h-full">
      <PrincipalName />
      <ItemKnowledge />

      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
          mt-28 justify-items-center content-center text-center md:h-2/3 gap-12"
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

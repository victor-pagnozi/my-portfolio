import { Dumbbell } from "lucide-react";
import { Close, Root, Trigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { animated, config, useTransition } from "react-spring";
import { StyledContent, StyledOverlay } from "../utils/modal-animation";

export const ProjectPreviewItem = () => {
  const [open, setOpen] = useState(false);
  const transitions = useTransition(open, {
    from: { opacity: 0, y: -50 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 50 },
    config: config.default,
  });

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild onClick={() => setOpen(true)}>
        <div
          className="cursor-pointer grid rounded-lg h-80 w-60 
      bg-red-300 items-center justify-center"
        >
          <Dumbbell size={30} />
        </div>
      </Trigger>

      <>
        {open && (
          <>
            <StyledOverlay as={animated.div} />
            <StyledContent>
              <h1>Hello from inside the Dialog!</h1>
              <Close>close</Close>
            </StyledContent>
          </>
        )}

        {!open &&
          transitions(
            (styles, item) =>
              item && (
                <>
                  <StyledOverlay
                    as={animated.div}
                    style={{ opacity: styles.opacity }}
                  />
                  <StyledContent
                    as={animated.div}
                    style={{ opacity: styles.opacity }}
                  >
                    <h1>Hello from inside the Dialog!</h1>
                    <Close>close</Close>
                  </StyledContent>
                </>
              )
          )}
      </>
    </Root>
  );
};

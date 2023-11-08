import { Content, Overlay } from "@radix-ui/react-dialog";
import { keyframes, styled } from "@stitches/react";

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeout = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const StyledOverlay = styled(Overlay, {
  backgroundColor: "rgba(0, 0, 0, .15)",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`,
  },
});

export const StyledContent = styled(Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  maxWidth: "fit-content",
  maxHeight: "85vh",
  padding: 20,
  marginTop: "-5vh",
  backgroundColor: "white",
  borderRadius: 6,

  "&:focus": {
    outline: "none",
  },

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeout} 200ms ease-out`,
  },
});

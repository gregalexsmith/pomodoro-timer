export const positionInContainer = (el, container) => {
  const rectEl = el.getBoundingClientRect();
  const rectC = container.getBoundingClientRect();
  return {
    x: rectEl.x - rectC.x,
    y: rectEl.y - rectC.y,
    width: rectEl.width,
    height: rectEl.height
  };
};

export const render = (template, rootID = "content") => {
  const contentWrapper = document.getElementById(rootID);
  contentWrapper.innerHTML = template;
};

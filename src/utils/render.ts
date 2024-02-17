export const render = (template: string, rootID = 'content') => {
  const contentWrapper = document.getElementById(rootID) as HTMLElement
  contentWrapper.innerHTML = template
}

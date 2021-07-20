function scrollBody(isDisabled: boolean) {
  const $body = document.querySelector("body");
  if (isDisabled && $body)
    $body!.style.overflow = "hidden";
  else
    $body!.style.overflow = "inherit";
}

export default scrollBody
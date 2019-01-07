const truncate = (content, limit, after) => {
  if (!content || !limit) return

  let truncContent = content.split(' ').slice(0, limit).join(' ')
  truncContent += (after ? after : '')

  return truncContent
}

export const utilities = {
  truncate
}

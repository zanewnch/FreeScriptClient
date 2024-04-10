export const urlFriendly = (author: string, title: string) => {
    return (
      author
        .replace(/<\/?p>/g, '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-') +
      '/' +
      title
        .replace(/<\/?p>/g, '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
    )
  }
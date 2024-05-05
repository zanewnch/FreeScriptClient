export interface Article {
  /* 
    [key: string]：这部分表示你可以使用任意字符串作为索引。key 只是一个占位符，你可以用任何你喜欢的名字替换它。

    number | null：这部分表示索引的值可以是 number 类型或 null 类型。

    所以，[key: string]: number | null; 的整体含义是：你可以使用任意字符串作为索引来访问对象的属性，这些属性的值可以是 number 类型或 null 类型。

    在 TypeScript 中，如果一个类型有一个索引签名，那么所有其他属性的类型必须是索引签名类型的子类型。在你的 Article 类型中，content 属性的类型 string | undefined 不是索引签名类型 number | string | Date | object | boolean 的子类型，因为索引签名类型没有包含 undefined。
     */
  [key: string]: number | string | Date | object | boolean | undefined
  _id?: string
  title?: string
  content?: string
  author?: string
  createdDate?: Date
  publishedDate?: Date
  updatedDate?: Date
  tag?: string
  like?: number
  views?: number
  summary?: string
  status?: string
  comments?: {
    username?: string
    content?: string
    createdDate?: Date
  }[]
}

import { defineStore } from 'pinia'
import type { Comment } from '@/interface/CommentInterface'

export const useArticleStore = defineStore('article', {
  state: (): {
    author: string
    createdDate: Date | null
    publishedDate: Date | null
    updatedDate: Date | null
    tag: string
    like: number
    views: number
    summary: string
    status: string
    comments: Comment[] | null
  } => {
    return {
      author: '',
      createdDate: null,
      publishedDate: null,
      updatedDate: null,
      tag: '',
      like: 0,
      views: 0,
      summary: '',
      status: '',
      comments: null
    }
  },
  actions: {
    setAuthor(newAuthor: string) {
      this.author = newAuthor
    },
    setCreatedDate(newDate: Date | null) {
      this.createdDate = newDate
    },
    setPublishedDate(newDate: Date | null) {
      this.publishedDate = newDate
    },
    setUpdatedDate(newDate: Date | null) {
      this.updatedDate = newDate
    },
    setTag(newTag: string) {
      this.tag = newTag
    },
    setLike(newLike: number) {
      this.like = newLike
    },
    setViews(newViews: number) {
      this.views = newViews
    },
    setSummary(newSummary: string) {
      this.summary = newSummary
    },
    setStatus(newStatus: string) {
      this.status = newStatus
    },
    setComments(newComments: Comment[] | null) {
      this.comments = newComments
    }
  },
  getters: {}
})

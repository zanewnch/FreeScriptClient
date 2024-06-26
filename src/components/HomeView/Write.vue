<script setup lang="ts">
// !tiptap table for show user table
// !socket.io
import HomeNav from '../Nav/HomeNav.vue'
import { ref, watch, onMounted, onBeforeUnmount, type Ref } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Heading from '@tiptap/extension-heading'
import type { AxiosResponse } from 'axios'
import request from '../../utils/Request'
// @ts-ignore
import { BubbleMenu, Editor, EditorContent, FloatingMenu } from '@tiptap/vue-3'
import { useRouter } from 'vue-router'

const router = useRouter()
const title: Ref<Editor | null> = ref(null)
const content: Ref<Editor | null> = ref(null)
const isClearParagraph: Ref<boolean> = ref(true)
const isClearContentParagraph: Ref<boolean> = ref(true)

onMounted((): void => {
  content.value = new Editor({
    extensions: [StarterKit, Highlight, Typography, Heading],
    content: `
      <p>
        Input content...
      </p>

    `
  })
  title.value = new Editor({
    extensions: [StarterKit, Highlight, Typography, Heading],
    content: `
      <p>
        <em>Title...</em>
      </p>
    `
  })
})

onBeforeUnmount((): void => {
  if (content.value) {
    content.value.destroy()
  }

  if (title.value) {
    title.value.destroy()
  }
})

const sendData = async (): Promise<void> => {
  try {
    // check if the title and content are not empty
    if (content.value && title.value) {
      const res: AxiosResponse<any> = await request.post(
        '/article/publish',
        {
          data: {
            title: title.value.getHTML(),
            content: content.value.getHTML(),
            author: 'admin',
            createdDate: new Date(),
            publishedDate: new Date(),
            updatedDate: new Date(),
            tag: 'test',
            like: 0,
            view: 0,
            summary: 'test',
            status: 'test',
            comment: [
              {
                username: 'Commenter',
                content: 'This is a comment.',
                createdDate: new Date()
              }
            ]
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      console.log(res.data)

      router.push('/')
    }
  } catch (e) {
    console.log(e)
  }
}

const windowsWidth = window.innerWidth

const clearDefaultParagraph = () => {
  if (isClearParagraph.value && windowsWidth > 768) {
    title.value?.commands.clearContent(true)
    content.value?.commands.clearContent(true)
  }
  if (isClearParagraph.value && windowsWidth < 768) {
    title.value?.commands.clearContent(true)
  }

  isClearParagraph.value = false
}

const clearDefaultContentParagraph = () => {
  if (isClearContentParagraph.value && windowsWidth < 768) {
    content.value?.commands.clearContent(true)
  }

  isClearContentParagraph.value = false
}
</script>

<template>
  <div class="md:w-full md:h-screen md:flex md:flex-col md:justify-start items-center">
    
    <HomeNav>
      <template #publish>
        <li class="md:mr-32">
          <button
            @click="sendData"
            type="button"
            data-ripple-light="true"
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          >
            Publish
          </button>
        </li>
      </template>
    </HomeNav>
    <!-- main content -->
    <div class=" sm:h-3/5 sm:flex sm:flex-col sm:items-center sm:justify-start md:w-full ">
      <div
        v-if="title"
        class="md:w-4/5"
      >
        <bubble-menu
          class="bubble-menu"
          :tippy-options="{ duration: 100 }"
          :editor="title"
        >
          <button
            @click="title.chain().focus().toggleBold().run()"
            :class="{ 'is-active': title.isActive('bold') }"
          >
            Bold
          </button>
          <button
            @click="title.chain().focus().toggleItalic().run()"
            :class="{ 'is-active': title.isActive('italic') }"
          >
            Italic
          </button>
          <button
            @click="title.chain().focus().toggleStrike().run()"
            :class="{ 'is-active': title.isActive('strike') }"
          >
            Strike
          </button>
        </bubble-menu>

        <floating-menu
          class="floating-menu"
          :tippy-options="{ duration: 100 }"
          :editor="title"
        >
          <button
            @click="title.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': title.isActive('heading', { level: 1 }) }"
          >
            H1
          </button>
          <button
            @click="title.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': title.isActive('heading', { level: 2 }) }"
          >
            H2
          </button>
          <button
            @click="title.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': title.isActive('bulletList') }"
          >
            Bullet List
          </button>
        </floating-menu>
      </div>
      <editor-content
        v-if="title"
        :editor="title"
        class="editor md:appearance-none focus:outline-none md:w-3/5  sm:w-3/5"
        @click="clearDefaultParagraph"
      />
      <div
        v-if="content"
        class="bg-red-400 md:w-4/5"
      >
        <bubble-menu
          class="bubble-menu"
          :tippy-options="{ duration: 100 }"
          :editor="content"
        >
          <button
            @click="content.chain().focus().toggleBold().run()"
            :class="{ 'is-active': content.isActive('bold') }"
          >
            Bold
          </button>
          <button
            @click="content.chain().focus().toggleItalic().run()"
            :class="{ 'is-active': content.isActive('italic') }"
          >
            Italic
          </button>
          <button
            @click="content.chain().focus().toggleStrike().run()"
            :class="{ 'is-active': content.isActive('strike') }"
          >
            Strike
          </button>
        </bubble-menu>

        <floating-menu
          class="floating-menu"
          :tippy-options="{ duration: 100 }"
          :editor="content"
        >
          <button
            @click="content.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': content.isActive('heading', { level: 1 }) }"
          >
            H1
          </button>
          <button
            @click="content.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': content.isActive('heading', { level: 2 }) }"
          >
            H2
          </button>
          <button
            @click="content.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': content.isActive('bulletList') }"
          >
            Bullet List
          </button>
        </floating-menu>
      </div>

      <editor-content
        v-if="content"
        :editor="content"
        class="editor md:w-3/5 sm:w-3/5"
        @click="clearDefaultContentParagraph"
      />
    </div>





  </div>
</template>
<style scoped lang="scss">
@media screen and (min-width: 768px) {
  .tiptap {
    >*+* {
      margin-top: 0.75em;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }
  }

  .bubble-menu {
    display: flex;
    background-color: #0d0d0d;
    padding: 0.2rem;
    border-radius: 0.5rem;

    button {
      border: none;
      background: none;
      color: #fff;
      font-size: 0.85rem;
      font-weight: 500;
      padding: 0 0.2rem;
      opacity: 0.6;

      &:hover,
      &.is-active {
        opacity: 1;
      }
    }
  }

  .floating-menu {
    display: flex;
    background-color: #0d0d0d10;
    padding: 0.2rem;
    border-radius: 0.5rem;

    button {
      border: none;
      background: none;
      font-size: 0.85rem;
      font-weight: 500;
      padding: 0 0.2rem;
      opacity: 0.6;

      &:hover,
      &.is-active {
        opacity: 1;
      }
    }
  }

  .editor:focus {
    // 消除外框，但不知道為什麼沒用
    outline: none;
  }
}
</style>

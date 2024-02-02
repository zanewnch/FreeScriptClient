<script setup>
// 完成編輯頁面
// tailwindcss template
import Nav from '@/components/HomeView/Nav.vue'
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Heading from '@tiptap/extension-heading'


import {
    BubbleMenu,
    Editor,
    EditorContent,
    FloatingMenu,
} from '@tiptap/vue-3'

const editor = ref(null)

onMounted(() => {
    editor.value = new Editor({
        extensions: [
            StarterKit,
            Highlight,
            Typography,
            Heading,
        ],
        content: `
      <p>
        Try to select <em>this text</em> to see what we call the bubble menu.
      </p>
      <p>
        Neat, isn’t it? Add an empty paragraph to see the floating menu.
      </p>
    `,
    })
})

onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy()
    }
})






</script>

<template>
    <div class='md:w-full md:h-screen md:flex md:flex-col'>




        <div v-if="editor">
            <bubble-menu
                class="bubble-menu"
                :tippy-options="{ duration: 100 }"
                :editor="editor"
            >
                <button
                    @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }"
                >
                    Bold
                </button>
                <button
                    @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }"
                >
                    Italic
                </button>
                <button
                    @click="editor.chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }"
                >
                    Strike
                </button>
            </bubble-menu>

            <floating-menu
                class="floating-menu"
                :tippy-options="{ duration: 100 }"
                :editor="editor"
            >
                <button
                    @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
                >
                    H1
                </button>
                <button
                    @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
                >
                    H2
                </button>
                <button
                    @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ 'is-active': editor.isActive('bulletList') }"
                >
                    Bullet List
                </button>
            </floating-menu>
        </div>

        <editor-content :editor="editor" />


        <h1>aaa</h1>




        <button
            type="button"
            data-ripple-light="true"
            class="hidden align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        >
            Button
        </button>


        <!-- Nav -->
        <div class='md:w-full hidden'>
            <Nav></Nav>
        </div>



        <!-- Main content -->
        <div class='md:w-full md:h-4/5 md:flex md:flex-col md:justify-start md:items-center  '>
        </div>
    </div>
</template>
<style scoped lang='scss'>
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
            border-left: 2px solid rgba(#0D0D0D, 0.1);
        }
    }

    .bubble-menu {
        display: flex;
        background-color: #0D0D0D;
        padding: 0.2rem;
        border-radius: 0.5rem;

        button {
            border: none;
            background: none;
            color: #FFF;
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
        background-color: #0D0D0D10;
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

    h1{
        font-size: 100px !important;
    }
}
</style>
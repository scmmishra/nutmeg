<template>
  <editor-content class="w-full min-h-64" :editor="editor"/>
</template>

<script>
// Import the editor
import { Editor, EditorContent } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  Bold,
  Code,
  Italic,
  Link,
  History
} from "tiptap-extensions";
export default {
  name: "Editor",
  props: ["note"],
  components: {
    EditorContent
  },
  data() {
    return {
      editor: null
    };
  },
  watch: {
    note() {
      this.editor = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new History()
        ],
        content: this.note
      });
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({
          levels: [1, 2, 3]
        }),
        new Bold(),
        new Code(),
        new Italic(),
        new History()
      ],
      content: this.note
    });
  },
  beforeDestroy() {
    this.editor.destroy();
  }
};
</script>
<style lang="css">
ul[data-type="todo_list"] {
  padding-left: 0;
}
li[data-type="todo_item"] {
  display: flex;
  flex-direction: row;
}
.todo-checkbox {
  border: 2px solid #141414;
  height: 0.9em;
  width: 0.9em;
  box-sizing: border-box;
  margin-right: 10px;
  margin-top: 0.3rem;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  border-radius: 0.2em;
  background-color: transparent;
  transition: 0.4s background;
}
.todo-content {
  flex: 1;
}
li[data-done="true"] {
  text-decoration: line-through;
}
li[data-done="true"] .todo-checkbox {
  background-color: #141414;
}
li[data-done="false"] {
  text-decoration: none;
}
* {
  outline: none;
}
blockquote p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  border-left: 3px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  padding-left: 0.8rem;
  font-style: italic;
}
pre {
  background-color: #141414;
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  font-size: 0.8rem;
  overflow-x: auto;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
}
</style>
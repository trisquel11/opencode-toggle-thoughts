import { Plugin } from "@opencode/plugin/tui"

export default Plugin.define({
  id: "toggle-thoughts",
  setup(context) {
    context.keymap.layer(() => ({
      mode: "global",
      commands: [
        {
          id: "thoughts.toggle",
          title: "Toggle thought blocks",
          group: "Session",
          palette: true,
          slash: { name: "toggle-thoughts" },
          run: () => context.keymap.dispatch("session.toggle.thinking"),
        },
      ],
      bindings: ["thoughts.toggle"],
    }))
  },
})

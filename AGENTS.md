# Agent guidance

- Keep this plugin focused on toggling OpenCode's existing thought visibility
  command; do not implement or alter model reasoning behavior.
- Preserve both entry points: `/toggle-thoughts` and the **Toggle thought
  blocks** command-palette item.
- This is a TUI plugin. Use the `@opencode/plugin/tui` API and follow the
  current OpenCode plugin documentation when changing its integration.
- Avoid changing the installed copy under `~/.config/opencode/plugins/` as part
  of repository work unless explicitly requested.
- Before publishing, verify the package entrypoint and test it with the target
  OpenCode version.

# toggle-thoughts

A small OpenCode TUI plugin that adds a command to toggle assistant thought
blocks in the current session.

## Usage

Run `/toggle-thoughts` or select **Toggle thought blocks** from the command
palette. Both invoke OpenCode's built-in `session.toggle.thinking` command.

## Plugin entrypoint

This is a TUI-only plugin. Its entrypoint is `tui.ts`, and it imports the TUI
plugin API from `@opencode/plugin/tui`.

When installed as a local global plugin, OpenCode discovers it under
`~/.config/opencode/plugins/toggle-thoughts/`. For a published package, expose
the TUI entrypoint as the package's `./tui` export and configure the package in
`cli.json` if it should run independently of the connected server.

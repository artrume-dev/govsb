# VISIBI Slash Commands

This directory contains custom slash commands for the VISIBI project.

## Frontend Sub-Agent Commands

These commands invoke specialized frontend development agents:

- `/ui` - Frontend UI Agent (React components, Tailwind CSS, shadcn/ui)
- `/viz` - Data Visualization Agent (D3.js charts and visualizations)  
- `/api` - API Integration Agent (API calls, hooks, state management)
- `/test` - Testing Agent (Vitest, React Testing Library)
- `/optimize` - Optimization Agent (Performance, accessibility)

## How Slash Commands Work

1. **Create** a `.md` file in `.claude/commands/`
2. **Write** the prompt/instructions in the file
3. **Restart** Claude Code or reload the workspace
4. **Use** the command by typing `/command-name` followed by your request

## File Naming

- File name: `command-name.md`
- Command: `/command-name`
- Example: `ui.md` → `/ui`

## Testing Commands

After creating or updating commands:
1. Save all files
2. Reload the VS Code window (Cmd+Shift+P → "Developer: Reload Window")
3. Try typing `/` in the chat to see available commands

## Documentation

For detailed guides, see:
- `SLASH-COMMANDS.md` - Quick reference
- `FRONTEND-SUB-AGENTS.md` - Complete guide
- Individual `frontend-*-agent.md` files - Detailed patterns

# How to Activate Slash Commands for Frontend Sub-Agents

## ✅ Current Status

The slash command files have been created and are ready to use:

```
.claude/commands/
├── ui.md           (/ui command)
├── viz.md          (/viz command)
├── api.md          (/api command)
├── test.md         (/test command)
├── optimize.md     (/optimize command)
└── README.md       (documentation)
```

## 🔄 Activation Steps

### Step 1: Reload VS Code Window
The commands should be automatically detected after reloading:

**Method A - Command Palette:**
1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type "Developer: Reload Window"
3. Press Enter

**Method B - Restart VS Code:**
1. Quit VS Code completely
2. Reopen VS Code
3. Open the VISIBI project

### Step 2: Verify Commands Are Available
After reloading, try typing `/` in the Claude Code chat to see if the commands appear in the autocomplete list.

### Step 3: Test a Command
Try running:
```
/ui
```

If it works, you should see the UI agent prompt expand.

## 🔍 Troubleshooting

### Issue: Commands Not Showing Up

**Check 1: Verify Files Exist**
```bash
ls -la .claude/commands/*.md
```
You should see: ui.md, viz.md, api.md, test.md, optimize.md

**Check 2: Verify File Format**
```bash
head -5 .claude/commands/ui.md
```
Should start with "You are the Frontend UI Agent..."

**Check 3: Check Claude Code Version**
Custom slash commands may require a specific version of Claude Code. Check for updates.

**Check 4: Workspace Settings**
Ensure `.claude/` directory is in the project root, not nested deeper.

### Issue: Commands Expand But Don't Work Properly

The commands should work as prompt expansions. When you type:
```
/ui Create a button component
```

It should expand to:
```
You are the Frontend UI Agent for VISIBI...
[full prompt]
Create a button component
```

## 📋 Alternative Usage Methods

If slash commands don't activate immediately, you can still use the sub-agents:

### Method 1: Direct Reference
```
Based on the UI agent guide in .claude/commands/frontend-ui-agent.md, create a button component
```

### Method 2: Copy-Paste Prompt
1. Open `.claude/commands/ui.md`
2. Copy the content
3. Paste it into the chat
4. Add your specific request

### Method 3: File Reference
```
Using @ui.md as context, create a loading spinner component
```

## 🎯 Using the Commands

Once activated, use them like this:

### Basic Usage
```
/ui Create a notification toast component
/viz Build a line chart for trends
/api Add endpoint for fetching history
/test Write tests for Dashboard component
/optimize Improve Dashboard performance
```

### With Detailed Requirements
```
/ui Create a ComparisonCard component that:
- Displays two brands side-by-side
- Shows sentiment badges and visibility scores
- Supports dark mode
- Responsive layout (stacks on mobile)
```

## 📚 Command Reference

| Command | Purpose | Example |
|---------|---------|---------|
| `/ui` | Build React UI components | `/ui Create a modal dialog` |
| `/viz` | Create D3.js visualizations | `/viz Build a pie chart` |
| `/api` | Handle API integration | `/api Add history endpoint` |
| `/test` | Write tests | `/test Test the form validation` |
| `/optimize` | Optimize performance/a11y | `/optimize Lazy load components` |

## 🔗 Related Documentation

- **[SLASH-COMMANDS.md](SLASH-COMMANDS.md)** - Quick command reference
- **[FRONTEND-SUB-AGENTS.md](FRONTEND-SUB-AGENTS.md)** - Complete sub-agent guide
- **`.claude/commands/frontend-*-agent.md`** - Detailed implementation guides

## 💡 Tips

1. **Reload after creating new commands** - VS Code needs to detect the files
2. **Commands are case-sensitive** - Use `/ui` not `/UI`
3. **Be specific in requests** - Better results with clear requirements
4. **Check autocomplete** - Type `/` to see available commands
5. **Combine commands** - Use multiple agents for complex features

## ✅ Verification Checklist

After following the activation steps, verify:

- [ ] Reloaded VS Code window
- [ ] Typed `/` in chat and see command suggestions
- [ ] Successfully run `/ui` and see prompt expansion
- [ ] All 5 commands appear: ui, viz, api, test, optimize
- [ ] Commands execute and provide appropriate responses

## 🆘 Still Not Working?

If commands still don't activate after reload:

1. **Check Claude Code version** - Update if needed
2. **Check console for errors** - View → Developer Tools → Console
3. **Try clearing cache** - Cmd+Shift+P → "Developer: Reload Window"
4. **Use alternative methods** - Direct references work just as well
5. **Check documentation** - `/help` for Claude Code help

## 📞 Next Steps

Once activated:
1. Try a simple command: `/ui Create a button`
2. Review the output and iterate
3. Use commands for your development workflow
4. Refer to detailed guides for patterns and examples

**Ready to use the frontend sub-agents!** 🚀

---

*Note: Custom slash commands are a feature of Claude Code. The exact activation method may vary based on your version and environment. The alternative usage methods will always work regardless of slash command availability.*

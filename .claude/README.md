# MCP Configuration

This project has been configured with Model Context Protocol (MCP) support.

## What is MCP?

MCP enables AI assistants (like Claude Code) to interact with your project through a standardized interface. This allows AI to:
- Generate components, hooks, and other code artifacts
- Scaffold new features
- Update configuration files
- Provide project-specific assistance

## Usage

### With Claude Code

1. Open this project in an editor with Claude Code support
2. The AI assistant will automatically detect the MCP configuration
3. Use natural language to interact with your project:
   - "Generate a new component called UserProfile"
   - "Create a custom hook for data fetching"
   - "Update the API base URL in configuration"

### Manual Usage

You can also use the SourceLoop CLI directly:

```bash
# Generate code
sl react:generate --type component --name MyComponent

# Scaffold new projects
sl react:scaffold my-new-project

# Update configuration
sl react:config --help
```

## Configuration

The MCP configuration is stored in `.claude/mcp.json`. You can customize:
- Timeout values
- Environment variables
- Command arguments

For more information, visit: https://docs.anthropic.com/claude/docs/mcp

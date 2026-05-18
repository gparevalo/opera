# obsidian - papwer clip

# Instalar modelo ollama

ollama pull qwen3:8b
ollama pull qwen3-coder
ollama pull gpt-oss:20b

ollama cp qwen3-coder claude-3-5-sonnet


# Contenido .env
ANTHROPIC_BASE_URL=http://localhost:11434
ANTHROPIC_API_KEY=ollama
ANTHROPIC_AUTH_TOKEN=ollama
ANTHROPIC_MODEL=claude-3-5-sonnet


# Variables de entorno
export ANTHROPIC_BASE_URL=http://localhost:11434
export ANTHROPIC_API_KEY=ollama
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_MODEL=claude-3-5-sonnet


# Test 
curl http://localhost:11434/api/tags


# Iniciar claude
set -a && source .env && set +a
claude


# Listar todos los modelos instalados
du -sh ~/.ollama
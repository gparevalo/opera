

claude --model openrouter/free


obsidian

papwer clip


export ANTHROPIC_API_KEY="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"
export OPENROUTER_API_KEY="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"
claude --model openrouter/free --api-provider openrouter



ANTHROPIC_API_KEY="" ANTHROPIC_BASE_URL="https://openrouter.ai/api" ANTHROPIC_AUTH_TOKEN="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" claude --model openrouter/free 



set -a && source .env && set +a
claude
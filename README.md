# AI FDE / Architect Roadmap

A branched, interlinked learning roadmap for the Lead Forward-Deployed Engineer / AI Architect path.
Concepts, not syntax: every topic has a metaphor, a real company example, when to use / when not to, trade-offs, diagrams, a glossary, an interview angle, sources, and videos / interactive visualisers to watch.

**Live site:** https://blazeblitz276.github.io/ai-fde-roadmap/

## Structure
- `index.html`: hub with the branch map, nine track cards and search
- `path.html`: suggested order through all 40 topics (5 phases)
- `tracks/`: one page per track, topics in sequence
- `topics/`: one page per topic (40), with prev/next, related topics, sources, watch/see-it-move
- `drops/`: index of the 10 concept drops and one page per drop
- `experiences/`: real projects written up as decision journals (context, options, decision, basis, implication, FDE skill learned), linked to the topics they exercise; starts with the ForecastForge AI hackathon, updated as it progresses
- `glossary/`: merged glossary A-Z, linked back to topics
- `watch.html`: every video, visualiser and illustrated guide, grouped by track
- `data/roadmap.json`: the whole roadmap as data (tracks, topics, sources, watch links, glossary, experiences), handy for reuse in media or content
- `assets/`: one shared stylesheet and a tiny script

Static only, no build step. Diagrams are Mermaid, rendered in the browser from a CDN, so the diagrams, video thumbnails and external links need an internet connection.
Open `index.html` directly for offline reading of the text.

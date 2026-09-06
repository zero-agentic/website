---
title: 'The job is not the image'
description: 'Why AI-generated logos, app icons and restored photos need production-ready formats, sizes and resolution after generation.'
pubDate: 2026-09-06
---

Ask a current generative model for a company logo and it will give you something
plausible in a few seconds. Then try to use it.

You need it as vector, because it is going on a sign and on a favicon and on a
business card, and a 1024-pixel PNG is none of those things. You need it to sit
correctly on a dark background, which means you need an actual transparent edge
rather than a matte the model quietly baked in. You need it at 16 pixels, where
every interior detail the model was so pleased with collapses into mud.

None of that is a sampling problem. All of it is the job.

## The size ladder is not a resize

An application icon is not one image. On iOS it is a set. On Android it is a set
with a mask applied to it. On the desktop it is a different set again, and if you
are packaging an Electron app you need the platform-specific container formats
on top of that. A single source mark has to survive all of it.

Resizing does not survive it. A mark that reads at 512 pixels frequently does not
read at 32, because legibility at small sizes is a design decision — strokes get
heavier, counters get bigger, detail gets removed — not an interpolation
setting. Doing this correctly means deciding what to sacrifice at each step down
the ladder, and doing it consistently enough that the result still looks like one
mark.

## Resolution has a floor, and the floor is physical

Photo restoration has the same shape of problem pointed the other way. A restored
photograph destined for a screen and one destined for a 10-inch print are not the
same deliverable, and the difference is not a slider. If the output does not
clear the resolution the medium requires, the restoration failed regardless of
how good it looks in a browser at 50% zoom.

## What this implies about how you build

If you take the position that the deliverable is the product, a few things follow
that are inconvenient if you were hoping to ship a prompt box.

The system has to know what it is producing before it produces it. "A logo" and
"a poster" are not two prompts against one pipeline; they are two different sets
of constraints on output format, dimensions, colour handling, and what counts as
done.

Generation has to be one step in a longer job, not the whole job. Which means the
work has to be resumable, inspectable, and correctable at each stage — you have
to be able to fix the third step without regenerating the first.

And the model has to be replaceable. Models improve on a timescale of months. Any
architecture that treats a specific model as load-bearing is building on a part
that is guaranteed to be swapped out. The durable engineering is on either side
of it.

That is the part we are building.

---

*Zero Agentic's product is in development. Nothing described here is available
yet.*

# Generated And Derived Files Rules

- edit source files, not generated outputs, compiled artifacts, or cache files
- do not hand-edit `.next`, `dist`, generated API artifacts, or other derived files unless the task is explicitly about the generator or output pipeline
- if a source change requires regenerated artifacts, regenerate them from the source or call out that generation could not be run
- avoid relying on stale generated files as evidence that the source is correct
- keep transient logs, caches, and local tool artifacts out of meaningful code changes unless they are intentionally versioned

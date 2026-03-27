# UI State And Feedback Rules

- every async or data-driven interface must handle idle, loading, empty, success, and error states where relevant
- preserve user input when recovery is expected after validation or server errors
- use optimistic UI only when rollback behavior and integrity are clear
- disabled actions should remain understandable; avoid unexplained dead controls
- loading placeholders should resemble real layout without misleading the user about loaded data
- destructive actions require clear confirmation and visible outcome feedback
- do not leave the user guessing whether an action succeeded, failed, or is still pending

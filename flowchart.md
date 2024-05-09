```mermaid
flowchart
start --> init[count = 0, time = 10 * 1000]
init --> time
time --> timeLimit
timeLimit -->|Yes| buttonClick
timeLimit -->|No| result[count]
time[time - 1]
buttonClick[count++]
timeLimit[0 < time]
```

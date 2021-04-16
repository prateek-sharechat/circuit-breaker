This is the implementation of circuit breaker in Node.js.

Response - 

  
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Success'   │
    │ Timestamp  │ 1618595474724 │
    │ Successes  │       0       │
    │  Failures  │       0       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 200, data: 'success' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Failure'   │
    │ Timestamp  │ 1618595475727 │
    │ Successes  │       0       │
    │  Failures  │       1       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 500, data: 'failed' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Failure'   │
    │ Timestamp  │ 1618595476732 │
    │ Successes  │       0       │
    │  Failures  │       2       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 500, data: 'failed' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Success'   │
    │ Timestamp  │ 1618595477735 │
    │ Successes  │       0       │
    │  Failures  │       0       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 200, data: 'success' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Success'   │
    │ Timestamp  │ 1618595478735 │
    │ Successes  │       0       │
    │  Failures  │       0       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 200, data: 'success' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Success'   │
    │ Timestamp  │ 1618595479737 │
    │ Successes  │       0       │
    │  Failures  │       0       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 200, data: 'success' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Success'   │
    │ Timestamp  │ 1618595480743 │
    │ Successes  │       0       │
    │  Failures  │       0       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 200, data: 'success' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Failure'   │
    │ Timestamp  │ 1618595481746 │
    │ Successes  │       0       │
    │  Failures  │       1       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 500, data: 'failed' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Failure'   │
    │ Timestamp  │ 1618595482750 │
    │ Successes  │       0       │
    │  Failures  │       2       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 500, data: 'failed' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Success'   │
    │ Timestamp  │ 1618595483753 │
    │ Successes  │       0       │
    │  Failures  │       0       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 200, data: 'success' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Failure'   │
    │ Timestamp  │ 1618595484754 │
    │ Successes  │       0       │
    │  Failures  │       1       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 500, data: 'failed' }
    ┌────────────┬───────────────┐
    │  (index)   │    Values     │
    ├────────────┼───────────────┤
    │   Action   │   'Success'   │
    │ Timestamp  │ 1618595485756 │
    │ Successes  │       0       │
    │  Failures  │       0       │
    │ Next State │   'CLOSED'    │
    └────────────┴───────────────┘
    { status: 200, data: 'success' }


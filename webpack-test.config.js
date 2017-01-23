var context = require.context('./src', true, /_spec\.jsx?$/);
context.keys().forEach(context);

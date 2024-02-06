<!-- https://ejs.co/ -->

# Options

    cache Compiled functions are cached, requires filename
    filename Used by cache to key caches, and for includes
    root Set project root for includes with an absolute path (e.g, /file.ejs). Can be array to try to resolve include from multiple directories.
    views An array of paths to use when resolving includes with relative paths.
    context Function execution context
    compileDebug When false no debug instrumentation is compiled
    client Returns standalone compiled function
    delimiter Character to use for inner delimiter, by default '%'
    openDelimiter Character to use for opening delimiter, by default '<'
    closeDelimiter Character to use for closing delimiter, by default '>'
    debug Outputs generated function body
    strict When set to `true`, generated function is in strict mode
    _with Whether or not to use with() {} constructs. If false then the locals will be stored in the locals object. (Implies `--strict`)
    localsName Name to use for the object storing local variables when not using with Defaults to locals
    rmWhitespace Remove all safe-to-remove whitespace, including leading and trailing whitespace. It also enables a safer version of -%> line slurping for all scriptlet tags (it does not strip new lines of tags in the middle of a line).
    escape The escaping function used with <%= construct. It is used in rendering and is .toString()ed in the generation of client functions. (By default escapes XML).
    outputFunctionName Set to a string (e.g., 'echo' or 'print') for a function to print output inside scriptlet tags.
    async When true, EJS will use an async function for rendering. (Depends on async/await support in the JS runtime.

    <ul>
        <% users.forEach(function(user){ %>
            <%- include('user/show', {user: user}); %>
        <% }); %>
    </ul>

# Tags

    <% 'Scriptlet' tag, for control-flow, no output
    <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
    <%= Outputs the value into the template (HTML escaped)
    <%- Outputs the unescaped value into the template
    <%# Comment tag, no execution, no output
    <%% Outputs a literal '<%'
    %> Plain ending tag
    -%> Trim-mode ('newline slurp') tag, trims following newline
    _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

# CLI

EJS ships with a full-featured command-line interface. Options are similar to those used in JavaScript code:

    cache Compiled functions are cached, requires filename
    -o / --output-file FILE Write the rendered output to FILE rather than stdout.
    -f / --data-file FILE Must be JSON-formatted. Use parsed input from FILE as data for rendering.
    -i / --data-input STRING Must be JSON-formatted and URI-encoded. Use parsed input from STRING as data for rendering.
    -m / --delimiter CHARACTER Use CHARACTER with angle brackets for open/close (defaults to %).
    -p / --open-delimiter CHARACTER Use CHARACTER instead of left angle bracket to open.
    -c / --close-delimiter CHARACTER Use CHARACTER instead of right angle bracket to close.
    -s / --strict When set to `true`, generated function is in strict mode
    -n / --no-with Use 'locals' object for vars rather than using `with` (implies --strict).
    -l / --locals-name Name to use for the object storing local variables when not using `with`.
    -w / --rm-whitespace Remove all safe-to-remove whitespace, including leading and trailing whitespace.
    -d / --debug Outputs generated function body
    -h / --help Display this help message.
    -V/v / --version Display the EJS version.

$ ejs -p [ -c ] ./template_file.ejs -o ./output.html
$ ejs ./test/fixtures/user.ejs name=Lerxst
$ ejs -n -l _ ./some_template.ejs -f ./data_file.json


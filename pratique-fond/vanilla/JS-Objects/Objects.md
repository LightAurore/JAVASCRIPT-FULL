/_ ----------- _/
/_ Liste des Objets _/

/_ \**** Objets fondamentaux *** _/

    Object
    let o = new Object();// Équivalent à : o = new Boolean(false);
    let o = new Object(Boolean());let o = new Object(null);

    Function
    (function(){})


    Boolean
    var x = Boolean(expression); // conseillé
    var x = !!expression; // une autre méthode
    var x = new Boolean(expression); // à ne pas utiliser


    Symbol
    let sym1 = Symbol();
    let sym2 = Symbol("toto");
    let sym3 = Symbol("toto");

    Error

    EvalError
    InternalError Non-standard
    RangeError
    ReferenceError
    StopIteration
    SyntaxError
    TypeError
    URIError

/_ \**** Nombres et dates *** _/
Number
BigInt
Math
Date

/_ \**** Manipulation de textes *** _/
String
RegExp

/_ \**** Collections indexées *** _/
Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
BigInt64Array
BigUint64Array

/_ \**** Collections avec clefs *** _/
Map
Set
WeakMap
WeakSet

/_ \**** Données structurées *** _/
ArrayBuffer
SharedArrayBuffer Expérimental
Atomics Expérimental
DataView
JSON

/_ \**** Objets de contrôle d'abstraction *** _/
Promise
Generator
GeneratorFunction
AsyncFunction

/_ \**** Introspection *** _/
Reflect
Proxy

/_ \**** Internationalisation *** _/
Intl
Intl.Collator
Intl.DateTimeFormat
Intl.ListFormat
Intl.NumberFormat
Intl.PluralRules
Intl.RelativeTimeFormat
Intl.Locale

/_ \**** WebAssembly *** _/
WebAssembly
WebAssembly.Module
WebAssembly.Instance
WebAssembly.Memory
WebAssembly.Table
WebAssembly.CompileError
WebAssembly.LinkError
WebAssembly.RuntimeError

/_ \**** Autres *** _/
arguments
var reader = new FileReader();
/_ **\*\*\*\***\*\***\*\*\*\***\_**\*\*\*\***\*\***\*\*\*\*** _/

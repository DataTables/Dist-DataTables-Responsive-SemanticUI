# Responsive for DataTables with styling for [SemanticUI](https://semantic-ui.com/)

This is the distribution package for the [Responsive extension](https://datatables.net/extensions/responsive) for [DataTables](https://datatables.net/) with styling for [SemanticUI](https://semantic-ui.com/).

In the modern world of responsive web design tables can often cause a particular problem for designers due to their row based layout. Responsive is an extension for DataTables that resolves that problem by optimising the table's layout for different screen sizes through the dynamic insertion and removal of columns from the table.


## Installation

### Browser

To use DataTables with a simple `<script>` tag, rather than using this package, it is recommended that you use the [DataTables download builder](//datatables.net/download) which can create CDN or locally hosted packages for you, will all dependencies satisfied.

### npm

For installation via npm, yarn and other similar package managers, install this package with your package manager - e.g.:

```
npm install datatables.net-se
npm install datatables.net-responsive-se
```

Then, to load and initialise the software in your code use:

```
import DataTable from 'datatables.net-se';
import 'datatables.net-responsive-se'

new DataTable('#myTable', {
    // initialisation options
});
```


## Documentation

Full documentation and examples for Responsive can be found [on the DataTables website](https://datatables.net/extensions/responsive).


## Bug / Support

Support for DataTables is available through the [DataTables forums](//datatables.net/forums) and [commercial support options](//datatables.net/support) are available.

### Contributing

If you are thinking of contributing code to DataTables, first of all, thank you! All fixes, patches and enhancements to DataTables are very warmly welcomed. This repository is a distribution repo, so patches and issues sent to this repo will not be accepted. Instead, please direct pull requests to the [DataTables/Responsive](http://github.com/DataTables/Responsive). For issues / bugs, please direct your questions to the [DataTables forums](//datatables.net/forums).


## License

This software is released under the [MIT license](//datatables.net/license). You are free to use, modify and distribute this software, but all copyright information must remain.


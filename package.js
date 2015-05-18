Package.describe({
  name: 'jspdf:autotable',
  summary: 'jsPDF-AutoTable (official): generate PDF tables on the client-side (jspdf:core plugin)',
  version: '1.3.0',
  git: 'https://github.com/MeteorPackaging/jspdf-AutoTable-wrapper.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('jspdf:core@1.0.272');
  api.imply('jspdf:core');

  api.addFiles([
    'upstream/jspdf.plugin.autotable.js',
  ], 'client');
});

Package.on_test(function(api) {
  api.use('jspdf:autotable');

  api.use([
    'tinytest',
    'test-helpers'
  ], ['client']);

  api.add_files([
    'tests/tests.js',
  ], ['client']);
});

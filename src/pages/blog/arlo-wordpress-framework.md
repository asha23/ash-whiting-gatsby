---
title: "Arlo WordPress Framework"
date: "2020-02-13"
---

I recently created a WordPress framework which uses Laravel Mix in the bundled theme. It is a dependency of Composer so it's easy to spin up a working WordPress website in around a minute.

##Features

• WordPress is installed using Composer as a dependency. This means you can update WordPress by running ```composer update``` in the project root.

• Similar to Laravel, the core files are out of the root. Database information is kept in a ```.env``` file.

• WordPress Packagist - Keep your plugins up to date by running ```composer update```

• Uses Laravel Mix in the base theme included. This is a simple way to manage all your build dependencies.

___

[More Information >](https://asha23.github.io/arlo-framework-laravel-mix/)
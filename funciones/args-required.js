"use strict";
(() => {
    'use strict';
    const fullName = (firstName, lastName) => `${firstName}, ${lastName}`;
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();

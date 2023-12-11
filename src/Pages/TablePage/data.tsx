export type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
  about: string;
  friends: {
    id: number;
    name: string;
  }[];
};

export const TableDataPictureURL = 'https://via.placeholder.com/32x32';

export const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    index: 0,
    guid: 'b75b6dc6-9ed3-4627-9eda-644e4b513456',
    isActive: true,
    balance: '$2,166.05',
    picture: TableDataPictureURL,
    age: 38,
    eyeColor: 'blue',
    name: 'Tabatha Warner',
    gender: 'female',
    company: 'FROSNEX',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
    address: '789 Melba Court, Glendale, Illinois, 197',
    about:
      'Dolore nostrud quis amet ipsum. Magna velit in esse ipsum pariatur. Nulla sint non excepteur laboris consequat labore dolor Lorem aliqua proident. Laborum adipisicing cillum ut velit elit voluptate mollit nostrud nostrud veniam. Sit est esse sunt ut consequat. Mollit ut veniam velit excepteur enim tempor sit sint.\r\n',
    registered: '2022-11-05T01:25:10 -06:-30',
    latitude: 53.766444,
    longitude: -170.487162,
    tags: ['mollit', 'aliquip', 'enim', 'ea', 'veniam', 'sint', 'in'],
    friends: [
      {
        id: 0,
        name: 'Hart David',
      },
      {
        id: 1,
        name: 'Snider Franco',
      },
      {
        id: 2,
        name: 'Serrano Barr',
      },
    ],
    greeting: 'Hello, Tabatha Warner! You have 5 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    index: 1,
    guid: 'c4187ade-701e-44f3-9bb9-3ad6e0e27652',
    isActive: true,
    balance: '$1,955.12',
    picture: TableDataPictureURL,
    age: 27,
    eyeColor: 'brown',
    name: 'Santana Mcgowan',
    gender: 'male',
    company: 'BEZAL',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
    address: '814 Ridgewood Place, Sterling, Kansas, 6182',
    about:
      'Amet quis enim tempor sint quis consequat tempor incididunt. Tempor reprehenderit laborum aute qui reprehenderit reprehenderit ad tempor aliqua ex deserunt deserunt. Sint eiusmod ullamco esse consectetur culpa id occaecat laboris ex adipisicing. Quis deserunt eiusmod officia adipisicing irure. Proident deserunt ea proident dolore esse. Pariatur tempor ullamco enim consequat enim.\r\n',
    registered: '2015-09-10T02:20:33 -06:-30',
    latitude: 26.550389,
    longitude: 62.556288,
    tags: ['aute', 'pariatur', 'pariatur', 'irure', 'minim', 'laborum', 'excepteur'],
    friends: [
      {
        id: 0,
        name: 'Marcia Patton',
      },
      {
        id: 1,
        name: 'Maria Hunt',
      },
      {
        id: 2,
        name: 'Arnold Washington',
      },
    ],
    greeting: 'Hello, Santana Mcgowan! You have 2 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    index: 2,
    guid: 'aa96868c-2200-47b8-b018-e9e10db7eb62',
    isActive: false,
    balance: '$3,326.96',
    picture: TableDataPictureURL,
    age: 22,
    eyeColor: 'brown',
    name: 'Travis Nguyen',
    gender: 'male',
    company: 'PLASMOSIS',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
    address: '734 Leonora Court, Blanford, Hawaii, 8442',
    about:
      'Consectetur consequat et sit voluptate qui fugiat. Amet cillum ullamco veniam esse qui occaecat aute ea consectetur fugiat officia. Voluptate sint occaecat excepteur aliquip nisi. Laborum tempor do tempor fugiat velit irure cillum. Consequat in id fugiat qui laborum.\r\n',
    registered: '2017-09-04T06:12:40 -06:-30',
    latitude: 17.491702,
    longitude: -79.277742,
    tags: ['incididunt', 'duis', 'labore', 'do', 'irure', 'consectetur', 'velit'],
    friends: [
      {
        id: 0,
        name: 'Ebony Rosario',
      },
      {
        id: 1,
        name: 'Sylvia Day',
      },
      {
        id: 2,
        name: 'Potter Parker',
      },
    ],
    greeting: 'Hello, Travis Nguyen! You have 10 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '644f76e145923784c648f6df',
    index: 3,
    guid: '173e9311-175e-4d1d-8c03-2107b271b599',
    isActive: true,
    balance: '$1,392.08',
    picture: TableDataPictureURL,
    age: 39,
    eyeColor: 'green',
    name: 'Muriel Barlow',
    gender: 'female',
    company: 'AUTOGRATE',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
    address: '913 Columbia Street, Hiwasse, Maryland, 1549',
    about:
      'Consequat tempor eiusmod reprehenderit nostrud officia ad incididunt. Ut velit ullamco in ullamco anim duis laboris aliqua labore magna. Commodo consequat id cupidatat elit dolore cupidatat dolore consectetur labore esse dolore ad laborum. Laboris sint labore exercitation mollit labore exercitation. Sint mollit incididunt cupidatat ea esse labore duis Lorem culpa minim ut reprehenderit.\r\n',
    registered: '2019-02-09T08:30:41 -06:-30',
    latitude: 42.498291,
    longitude: 68.766582,
    tags: ['nulla', 'in', 'magna', 'sint', 'consectetur', 'sit', 'esse'],
    friends: [
      {
        id: 0,
        name: 'Mccullough Guy',
      },
      {
        id: 1,
        name: 'Adriana Sanford',
      },
      {
        id: 2,
        name: 'Annie Branch',
      },
    ],
    greeting: 'Hello, Muriel Barlow! You have 10 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    index: 4,
    guid: 'cd738ecf-b812-44d8-82bc-6fedc38cafbc',
    isActive: false,
    balance: '$1,253.31',
    picture: TableDataPictureURL,
    age: 32,
    eyeColor: 'green',
    name: 'Liliana Wilson',
    gender: 'female',
    company: 'SNOWPOKE',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
    address: '768 Highlawn Avenue, Hiseville, Northern Mariana Islands, 6617',
    about:
      'Et veniam exercitation nulla veniam velit sit id nostrud excepteur esse labore commodo. Adipisicing magna cupidatat magna aliqua enim veniam elit et nostrud quis aliqua. Velit dolore sit culpa et ut ad laborum deserunt. Esse ex excepteur ex commodo incididunt irure ipsum.\r\n',
    registered: '2019-01-18T04:07:43 -06:-30',
    latitude: -27.411676,
    longitude: 101.070317,
    tags: ['aliquip', 'nulla', 'fugiat', 'est', 'eiusmod', 'nulla', 'deserunt'],
    friends: [
      {
        id: 0,
        name: 'Paula Compton',
      },
      {
        id: 1,
        name: 'Juanita Norman',
      },
      {
        id: 2,
        name: 'Jamie Miles',
      },
    ],
    greeting: 'Hello, Liliana Wilson! You have 5 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '644f76e1c182b999fd3048e1',
    index: 5,
    guid: '3340c6bb-17d3-469e-8ce5-6eb37184df10',
    isActive: true,
    balance: '$3,217.13',
    picture: TableDataPictureURL,
    age: 38,
    eyeColor: 'brown',
    name: 'Poole Jennings',
    gender: 'male',
    company: 'SUREMAX',
    email: 'poolejennings@suremax.com',
    phone: '+1 (800) 521-2863',
    address: '489 Madison Place, Waukeenah, Alabama, 1051',
    about:
      'Enim deserunt do culpa aliqua eiusmod mollit et deserunt sunt nostrud aute id. Nostrud nisi irure nisi ullamco irure. Est velit eu officia magna quis reprehenderit duis aliquip fugiat ad excepteur. Irure sint cupidatat duis incididunt qui voluptate aliquip in velit.\r\n',
    registered: '2016-10-04T04:57:29 -06:-30',
    latitude: 47.286154,
    longitude: -60.755775,
    tags: ['dolore', 'consectetur', 'est', 'exercitation', 'labore', 'aliquip', 'dolor'],
    friends: [
      {
        id: 0,
        name: 'Richmond Payne',
      },
      {
        id: 1,
        name: 'Gay Acevedo',
      },
      {
        id: 2,
        name: 'Elvira Romero',
      },
    ],
    greeting: 'Hello, Poole Jennings! You have 5 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '6450d3726cc857b6e1d4a6b0',
    index: 0,
    guid: 'b122555e-c11f-4919-86de-f570963050c1',
    isActive: true,
    balance: '$3,237.49',
    picture: TableDataPictureURL,
    age: 33,
    eyeColor: 'brown',
    name: 'Lydia Thompson',
    gender: 'female',
    company: 'ZOID',
    email: 'lydiathompson@zoid.com',
    phone: '+1 (832) 560-2234',
    address: '917 McKibben Street, Hachita, Maine, 3693',
    about:
      'Est laboris fugiat est sint dolore ex sunt commodo veniam reprehenderit cillum. Proident Lorem veniam pariatur dolore occaecat esse. Aliquip commodo in nulla consequat magna velit aliquip nostrud ad dolor dolore proident esse enim.\r\n',
    registered: '2022-03-18T02:23:45 -06:-30',
    latitude: 45.888711,
    longitude: -77.670105,
    tags: ['amet', 'eiusmod', 'irure', 'duis', 'nisi', 'cupidatat', 'consectetur'],
    friends: [
      {
        id: 0,
        name: 'Nora Cherry',
      },
      {
        id: 1,
        name: 'Dorothea Fowler',
      },
      {
        id: 2,
        name: 'Mia Matthews',
      },
    ],
    greeting: 'Hello, Lydia Thompson! You have 4 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '6450d372909b4993622d3dc2',
    index: 1,
    guid: '4108581a-7910-4a99-9d6e-a9c6a41ceddb',
    isActive: false,
    balance: '$3,119.01',
    picture: TableDataPictureURL,
    age: 32,
    eyeColor: 'brown',
    name: 'Alexander Whitfield',
    gender: 'male',
    company: 'VALPREAL',
    email: 'alexanderwhitfield@valpreal.com',
    phone: '+1 (911) 523-3566',
    address: '414 Ditmas Avenue, Brandermill, Delaware, 9941',
    about:
      'Ut veniam dolore sunt quis tempor ipsum elit et Lorem. Veniam irure ullamco cupidatat est sint tempor aliqua veniam tempor. Veniam occaecat Lorem cupidatat esse nostrud velit elit velit fugiat qui minim ipsum. Sint sit mollit amet reprehenderit magna. Non cillum mollit et mollit fugiat sit ipsum. Occaecat quis velit ea officia ea qui laboris.\r\n',
    registered: '2017-06-09T10:14:13 -06:-30',
    latitude: -70.149019,
    longitude: -118.167126,
    tags: ['quis', 'consectetur', 'reprehenderit', 'veniam', 'voluptate', 'anim', 'laboris'],
    friends: [
      {
        id: 0,
        name: 'Mccray Hoover',
      },
      {
        id: 1,
        name: 'Gayle Bauer',
      },
      {
        id: 2,
        name: 'Inez Noel',
      },
    ],
    greeting: 'Hello, Alexander Whitfield! You have 8 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '6450d372b2cfdbf040754937',
    index: 2,
    guid: 'a6266966-ae7e-4e81-ab69-d2a8daa4e41c',
    isActive: false,
    balance: '$2,683.73',
    picture: TableDataPictureURL,
    age: 38,
    eyeColor: 'brown',
    name: 'Erika Davenport',
    gender: 'female',
    company: 'NETPLODE',
    email: 'erikadavenport@netplode.com',
    phone: '+1 (882) 456-2164',
    address: '439 Chestnut Avenue, Nanafalia, New Jersey, 3462',
    about:
      'Pariatur et voluptate labore nisi fugiat minim quis tempor sunt tempor non ex est. Adipisicing amet occaecat id reprehenderit eu pariatur excepteur aliquip pariatur laboris culpa. Est officia nostrud sit voluptate aliqua enim ea duis qui ad amet.\r\n',
    registered: '2014-10-20T07:53:45 -06:-30',
    latitude: -64.953959,
    longitude: 134.483639,
    tags: ['ut', 'excepteur', 'culpa', 'aliquip', 'ullamco', 'qui', 'veniam'],
    friends: [
      {
        id: 0,
        name: 'Tasha Hester',
      },
      {
        id: 1,
        name: 'Roberts Mccarty',
      },
      {
        id: 2,
        name: 'Estes Finley',
      },
    ],
    greeting: 'Hello, Erika Davenport! You have 1 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '6450d372395d67eb6b7870b0',
    index: 3,
    guid: 'b3014dd5-5262-49fe-a417-eaaaf60f91f6',
    isActive: false,
    balance: '$3,835.16',
    picture: TableDataPictureURL,
    age: 26,
    eyeColor: 'brown',
    name: 'Palmer Hood',
    gender: 'male',
    company: 'NIXELT',
    email: 'palmerhood@nixelt.com',
    phone: '+1 (926) 521-2905',
    address: '113 Bouck Court, Chase, Minnesota, 6305',
    about:
      'Eiusmod consequat aute nostrud aliquip anim ipsum labore occaecat. Elit ex occaecat ipsum officia veniam nulla qui do do cillum velit voluptate. Consectetur dolor duis culpa tempor veniam aliquip nostrud minim consectetur elit laboris. Magna incididunt excepteur quis cupidatat dolore. Quis incididunt do officia mollit veniam in. Sint exercitation aliquip in cillum dolore. Ex officia id in aute commodo duis enim officia id enim aliquip.\r\n',
    registered: '2018-07-16T12:52:57 -06:-30',
    latitude: 4.977235,
    longitude: -145.02546,
    tags: ['in', 'non', 'laborum', 'do', 'aliqua', 'laborum', 'mollit'],
    friends: [
      {
        id: 0,
        name: 'Joseph Horne',
      },
      {
        id: 1,
        name: 'Gay Olson',
      },
      {
        id: 2,
        name: 'Ward Mcdaniel',
      },
    ],
    greeting: 'Hello, Palmer Hood! You have 7 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '6450d37201df52217c466a10',
    index: 4,
    guid: 'fd859b46-2c05-4650-8547-9951d20fbe79',
    isActive: true,
    balance: '$3,114.74',
    picture: TableDataPictureURL,
    age: 39,
    eyeColor: 'brown',
    name: 'Ladonna Hansen',
    gender: 'female',
    company: 'ZORROMOP',
    email: 'ladonnahansen@zorromop.com',
    phone: '+1 (860) 518-2974',
    address: '773 Mermaid Avenue, Zeba, Idaho, 9787',
    about:
      'Sint tempor do exercitation commodo ut mollit exercitation mollit minim aute minim exercitation do. Eiusmod voluptate cupidatat velit ut cillum aliqua deserunt aliqua aute exercitation. Non commodo aliqua adipisicing ea. Veniam aliqua labore do ullamco est aute officia. Nostrud occaecat ipsum ea velit voluptate fugiat laborum ea proident exercitation. Pariatur eu eu aute eiusmod anim minim esse. Et tempor proident cillum ullamco consequat ut adipisicing officia.\r\n',
    registered: '2022-02-07T01:18:04 -06:-30',
    latitude: 3.939405,
    longitude: -9.882197,
    tags: ['minim', 'nisi', 'tempor', 'nulla', 'anim', 'minim', 'nulla'],
    friends: [
      {
        id: 0,
        name: 'Maria Ware',
      },
      {
        id: 1,
        name: 'Kathleen Mcclure',
      },
      {
        id: 2,
        name: 'Duncan Montgomery',
      },
    ],
    greeting: 'Hello, Ladonna Hansen! You have 10 unread messages.',
    favoriteFruit: 'apple',
  },
];

export const commonComponentViewerCode = `
type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const TableDataPictureURL = 'https://via.placeholder.com/32x32';

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: TableDataPictureURL,
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: TableDataPictureURL,
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: TableDataPictureURL,
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: TableDataPictureURL,
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: TableDataPictureURL,
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];
`;

export const propsData = [
  {
    name: 'data',
    type: 'T[]',
    desc: 'An array of objects representing the dataset to be displayed in the table. Each object corresponds to a row in the table, with its properties containing the data for each column. The data prop populates the table with the provided data.',
  },
  {
    name: 'columns',
    type: 'ColumnDef<T>[]',
    desc: 'An array of column configurations defining the structure and behavior of each column in the table. Each object in the columns array represents a column and specifies properties such as the column header, sorting options, filtering options, and data accessor. By providing the columns prop, you can customize the appearance and functionality of the columns in the table.',
  },
  {
    name: 'enableSorting',
    type: 'boolean',
    defaultVal: 'false',
    desc: 'A boolean value indicating whether sorting should be enabled in the table. When set to true, users can click on column headers to sort the table data based on that column.',
  },
  {
    name: 'enableGlobalFiltering',
    type: 'boolean',
    defaultVal: 'false',
    desc: 'A boolean value indicating whether global filtering should be enabled in the table. Global filtering allows users to search for specific data across all columns in the table.',
  },
  {
    name: 'globalFilterFn',
    type: 'FilterFn<T>',
    defaultVal: 'filterFns.fuzzy',
    desc: 'A custom filter function used for global filtering. This function is responsible for determining if a row should be included in the search results based on the provided search query. It takes the row data as input and returns a boolean value indicating whether the row matches the search query.',
  },
  {
    name: 'enableColumnFiltering',
    type: 'boolean',
    defaultVal: 'false',
    desc: 'A boolean value indicating whether column-level filtering should be enabled in the table. When set to true, users can filter the data within each individual column.',
  },
  {
    name: 'enablePagination',
    type: 'boolean',
    defaultVal: 'false',
    desc: 'A boolean value indicating whether pagination should be enabled in the table. When set to true, the table will display a pagination control that allows users to navigate through multiple pages of data.',
  },
  {
    name: 'rowsPerPageOptions',
    type: 'Array<number | {label: string; value: number}>',
    defaultVal: '[5, 10, 25, {label: "All", value: data.length}]',
    desc: 'An array of numbers or objects representing the options for the number of rows per page in the table. Each number represents the number of rows to be displayed per page, while each object can contain a label and value pair, allowing for custom labels to be displayed for each option. This prop provides flexibility in choosing the available rows per page options for the user.',
  },
  {
    name: 'enableRowDnd',
    type: 'boolean',
    defaultVal: 'true',
    desc: 'A boolean value indicating whether row dragging and dropping should be enabled in the table. When set to true, users can interactively rearrange the rows of the table by dragging and dropping them to new positions. ',
  },
  {
    name: 'enableColumnDnd',
    type: 'boolean',
    defaultVal: 'false',
    desc: 'A boolean value indicating whether column dragging and dropping should be enabled in the table. When set to true, users can interactively rearrange the columns of the table by dragging and dropping them to new positions.',
  },
  {
    name: 'MUITablePropsObject',
    type: 'MUITablePropsObject',
    desc: `The MUITablePropsObject is a prop type that represents a set of properties used to configure a Material-UI table component. It includes the following properties:
                - tableContainerProps: Props for the table container component.
                - tableProps: Props for the main table component.
                - tableHeadProps: Props for the table head component.
                - headerRowProps: Props for the table header row component.
                - tableBodyProps: Props for the table body component.
                - tableFooterProps: Props for the table footer component.
                - tablePaginationProps: Props for the table pagination component.
                - bodyRowProps: Props for the table body row component.
                - bodyCellProps: Props for the table body cell component.
                - columnCellProps: Props for the table column cell component.`,
  },
];

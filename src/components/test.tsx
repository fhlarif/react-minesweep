let a: number;
let b: string;
let c: boolean;

type Permissions = "Admin" | "User" | "Manager";

type PermissionsWithoutAdmin = Exclude<Permissions, "Admin">;

interface DepartmentForPermissions {
  depName: string;
  lvl: number;
}

const DepsForPerms: Record<Permissions, DepartmentForPermissions> = {
  Admin: {
    depName: "secuitrty",
    lvl: 10,
  },
  User: {
    depName: "sales",
    lvl: 5,
  },
  Manager: {
    depName: "sales",
    lvl: 10,
  },
};

type TuplePermissions = [Permissions, Permissions];

type BasicUser<A = boolean, P = TuplePermissions> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type BAsicUserWithoutPermissions = Omit<BasicUser, "permissions">;

type AdvanceUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvanceUser;

type BasicUserReadOnly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUSerPartial = Partial<BasicUser>;

type BasicUserReadObnlyRequired = Readonly<Partial<BasicUser>>;

const user: FullUser<boolean> = {
  name: "Nick",
  surname: "Poop",
  age: 30,
  isAdmin: true,
  permissions: [
    "Admin",
    "User",
    "Manager",
    "sd",
    "sd",
    "sdi",
    "asdoufh",
    "asduo",
  ],
  account: 100,
};

type BasicFunction = () => FullUser[];

type getFirstReturnType = ReturnType<BasicFunction>;

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const test = () => {
  return <div>test</div>;
};

export default test;

export type TUser = {
  id: number;
  email: string;
  recoveryEmail: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

function parseUser(json: any): TUser {
  return {
    id: json?.id ?? 0,
    email: json?.email ?? '',
    recoveryEmail: json?.recovery_email ?? '',
    status: json?.status ?? 'inactive',
    createdAt: json?.created_at ?? new Date(),
    updatedAt: json?.updated_at ?? new Date(),
  };
}

export const User = { parse: parseUser };

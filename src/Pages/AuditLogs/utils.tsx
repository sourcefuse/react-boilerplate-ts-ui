export type AuditLog = {
  id: string;
  action: string;
  actedOn: string;
  actionKey: string;
  before: {[key: string]: any};
};

export type ApiAuditLog = {
  [key: string]: any;
};

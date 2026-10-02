BAD:  items(id, user, data1, note, exp, stuff, created)
  exp    text: "8/14", "next tuesday", "2026-08-14"   -> cannot be compared
  user   the display name, duplicated in three tables -> breaks on a rename
  data1  sometimes quantity, sometimes unit           -> cannot be queried
  stuff  undocumented JSON, written by two modules    -> no single owner

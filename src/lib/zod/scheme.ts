import { z } from "zod";

export const formScheme = z.object({
  company: z.string().min(1, { message: "入力して下さい" }),
  startDate: z
    .string()
    .regex(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, {
      message: "日付形式をyyyy-mm-ddのようにしてください",
    }),
  endDate: z
    .string()
    .regex(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, {
      message: "日付形式をyyyy-mm-ddのようにしてください",
    }),
  content: z.string(),
});

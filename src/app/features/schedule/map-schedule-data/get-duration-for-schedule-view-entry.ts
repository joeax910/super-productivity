import { ScheduleViewEntry } from '../schedule.model';
import { SCHEDULE_TASK_MIN_DURATION_IN_MS } from '../schedule.const';

// const _getDurationForViewEntry = (viewEntry: ScheduleViewEntry): number => {
//   if (
//     viewEntry.type === ScheduleViewEntryType.Task ||
//     viewEntry.type === ScheduleViewEntryType.TaskPlannedForDay ||
//     viewEntry.type === ScheduleViewEntryType.ScheduledTask
//   ) {
//     return getTimeLeftForTask(viewEntry.data);
//   } else if (
//     viewEntry.type === ScheduleViewEntryType.SplitTask ||
//     viewEntry.type === ScheduleViewEntryType.SplitTaskPlannedForDay
//   ) {
//     return viewEntry.timeToGo;
//   } else if (
//     isContinuedTaskType(viewEntry) ||
//     viewEntry.type === ScheduleViewEntryType.RepeatProjectionSplitContinued ||
//     viewEntry.type === ScheduleViewEntryType.RepeatProjectionSplitContinuedLast
//   ) {
//     return viewEntry.timeToGo;
//   } else if (
//     viewEntry.type === ScheduleViewEntryType.RepeatProjection ||
//     viewEntry.type === ScheduleViewEntryType.RepeatProjectionSplit ||
//     viewEntry.type === ScheduleViewEntryType.ScheduledRepeatProjection
//   ) {
//     return viewEntry.data.defaultEstimate || 0;
//   } else if (viewEntry.type === ScheduleViewEntryType.CalendarEvent) {
//     return viewEntry.data.duration || 0;
//   } else if (viewEntry.type === ScheduleViewEntryType.LunchBreak) {
//     const d = new Date();
//     return (
//       getDateTimeFromClockString(viewEntry.data.endTime, d) -
//       getDateTimeFromClockString(viewEntry.data.startTime, d)
//     );
//   }
//   throw new Error('Wrong type given: ' + viewEntry.type);
// };

export const getDurationForScheduleViewEntry = (viewEntry: ScheduleViewEntry): number => {
  return Math.max(viewEntry.timeToGo, SCHEDULE_TASK_MIN_DURATION_IN_MS);
};

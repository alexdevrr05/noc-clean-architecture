import { CronJob } from 'cron';

type CronTime = string | Date;
type OnTick = () => void;

export class CronService {
  static createJob(cronTime: CronTime, onTick: OnTick): CronJob {
    /** le paso estos argumentos porque me fui
     * a la definicion de tipos de CronJob
     * command + click */
    const job = new CronJob(cronTime, onTick);

    job.start();

    return job;
  }
}

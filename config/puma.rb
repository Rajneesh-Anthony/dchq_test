workers Integer(ENV['WEB_CONCURRENCY'] || 2)


before_fork do
  require 'puma_worker_killer'
  PumaWorkerKiller.config do |config|
    config.ram           = 4096   # mb
    config.frequency     = 15    # seconds
    config.percent_usage = 0.98
    config.rolling_restart_frequency = 12 * 3600 # 12 hours in seconds
  end
  PumaWorkerKiller.start
end

from datetime import datetime, timezone

def get_utc_date():
    return datetime.now(timezone.utc).strftime('%Y-%m-%d')

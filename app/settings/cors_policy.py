cors_resource = {

    r"/*": {"origins": ["https://fabiola.dev", "https://www.googleapis.com/", "https://www.fabiola.dev"],
            "methods": ["GET", "POST", "PUT", "DELETE"],
            "allow_headers": ["Content-Type", "Authorization"],
            "supports_credentials": True
            }
}
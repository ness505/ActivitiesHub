using EventsHub.Domain;
using EventsHub.Persistence;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Application.Events.Queries;

public class GetEventList
{
    public class Query : IRequest<IReadOnlyList<Event>> { }

    public class Handler(AppDbContext context) : IRequestHandler<Query, IReadOnlyList<Event>>
    {
        public async Task<IReadOnlyList<Event>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await context.Events.ToListAsync(cancellationToken);
        }
    }
}